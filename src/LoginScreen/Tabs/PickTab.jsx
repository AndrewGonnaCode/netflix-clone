import React from 'react'
import './PickTab.css'

function PickTab() {
    return (
        <div className="pickTab">
            <div className="pickTab__info">
                <p>Choose one plan and watch everything on Netflix.</p>
                <button className="btn">Watch free for 30 days</button>
            </div>
          <table className="table">
              <thead>
                  <tr>
                  <th></th>
                   <th>Basic</th>
                   <th>Standart</th>
                   <th>Premium</th>
                  </tr>
              </thead>
              <tbody>
              <tr>
                <td>Monthly price after free month ends on 6/19/19</td>
                <td>$5.99</td>
                <td>$8.99</td>
                <td>$13.99</td>
              </tr>
              <tr>
              <td>HD Available</td>
                <td><i class="fas fa-times"></i></td>
                <td><i class="fas fa-check"></i></td>
                <td><i class="fas fa-check"></i></td>
              </tr>
              <tr>
                <td>Ultra HD Available</td>
                <td><i class="fas fa-times"></i></td>
                <td><i class="fas fa-times"></i></td>
                <td><i class="fas fa-check"></i></td>
                </tr>
                <tr>
                    <td>Screens you can watch on at the same time</td>
                            <td>1</td>
                            <td>2</td>
                            <td>4</td>
                    </tr>
                    <tr>
                            <td>Watch on your laptop, TV, phone and tablet</td>
                            <td><i class="fas fa-check"></i></td>
                            <td><i class="fas fa-check"></i></td>
                            <td><i class="fas fa-check"></i></td>
                    </tr>
                        <tr>
                            <td>Unlimited movies and TV shows</td>
                            <td><i class="fas fa-check"></i></td>
                            <td><i class="fas fa-check"></i></td>
                            <td><i class="fas fa-check"></i></td>
                        </tr>
                        <tr>
                            <td>Cancel anytime</td>
                            <td><i class="fas fa-check"></i></td>
                            <td><i class="fas fa-check"></i></td>
                            <td><i class="fas fa-check"></i></td>
                        </tr>
                        <tr>
                            <td>First month free</td>
                            <td><i class="fas fa-check"></i></td>
                            <td><i class="fas fa-check"></i></td>
                            <td><i class="fas fa-check"></i></td>
                        </tr>
              </tbody>
          </table>
        </div>
    )
}

export default PickTab
