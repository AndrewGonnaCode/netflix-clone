import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoading, selectUser, subscribe, toggleLoading } from '../features/userSlice'
import db from '../firebase'
import './PlansScreen.css'
import {loadStripe} from '@stripe/stripe-js'
import Loader from '../Loader/Loader'

function PlansScreen() {
    const loading = useSelector(selectLoading)
    const user = useSelector(selectUser)
    const [products, setProducts] = useState([])
    const [subscription, setSubscription] = useState(null)
    const dispatch = useDispatch()
    useEffect(()=>{
         db.collection('customers')
         .doc(user.uid)
         .collection('subscriptions')
         .get()
         .then((querySnapshot)=>{
             querySnapshot.forEach(async(subscription)=>{
                  dispatch(subscribe(subscription.data().role))
                 setSubscription({
                     role:subscription.data().role,
                     current_period_end:subscription.data().current_period_end.seconds,
                     current_period_start:subscription.data().current_period_end.seconds
                 })
             })
         })
         
    },[user.uid])

    useEffect(()=>{
      db.collection('products')
      .where("active", "==", true)
      .get()
      .then((querySnapshot)=>{
          const products = {};
          querySnapshot.forEach(async(productDoc)=>{
              products[productDoc.id] = productDoc.data();
              const priceSnap = await productDoc.ref.collection("prices").get();
              priceSnap.docs.forEach((price)=>{
                  products[productDoc.id].prices = {
                      priceId:price.id,
                      priceData:price.data()
                  }
              })
          })
          setProducts(products)
      })
    },[])

    const loadCheckout = async(priceId) =>{
        dispatch(toggleLoading(true))
         const docRef = await db.collection('customers')
         .doc(user.uid)
         .collection('checkout_sessions')
         .add({
             price:priceId,
             success_url:window.location.origin,
             cancel_url:window.location.origin
         })

         docRef.onSnapshot( async(snap)=>{
              const{error, sessionId} = snap.data()

              if(error){
                  alert(`An error occured ${error.message}`)
              }
              if(sessionId){
                  const sripe = await loadStripe("pk_test_51IEik3J8vkRMrIiaRLHRW8yoPDsxQTEwCi8AijhzH8iz0tBfL8n38k8UH4hmVQGBsUwFWragzaCSij0cLuu1951000GaabFwVc")
                  sripe.redirectToCheckout({sessionId})
                  dispatch(toggleLoading(false))
                }
         })
    }
    console.log('SUB',subscription?.role)
    return (
        <>
        {loading ? (
            <Loader/>
        ):(
            <div className="planScreen">
            <br/>
            {subscription && (
                <p>Renwal date:{" "}
                   {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}
                </p>
            )}
            {Object.entries(products).map(([productId, productData])=>{
                const isCurrentPackage = productData.name?.toLowerCase().includes(subscription?.role)
                return(
                    <div key={productId} className={`${isCurrentPackage && 'planScreen__plan--disabled'} planScreen__plan`}>
                        <div className="planScreen__info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button onClick={()=>!isCurrentPackage && loadCheckout(productData.prices.priceId)}>
                            {isCurrentPackage ? 'Current Package' : 'Subscirbe'}
                            </button>
                    </div>
                )
            })}
        </div>
        )}
        </>
    )
}

export default PlansScreen
