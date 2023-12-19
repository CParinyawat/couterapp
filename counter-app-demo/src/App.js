import React, { useState } from 'react';

function App(){
    const [count, setCount] = useState(42);
    const handleIncrement = () => (
        setCount(count + 1)
    )

    const handleDecrement = () => (
        setCount(count -1)
    )

    const handleReset = () => (
        setCount(0)
    )

    return(
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <div>
          <div>
            <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Counter App</h1>
            <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{count}</h1>
            <div style={{ display: 'grid', gridGap: '10px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
              <button 
                  style={{
                      padding: '10px 20px',
                      fontSize: '16px',
                      cursor: 'pointer',
                      backgroundColor: '#4caf50',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                  }}
                  onClick={handleIncrement}
              >
                  Increment
              </button>
        
              <button 
                  style={{
                      padding: '10px 20px',
                      fontSize: '16px',
                      cursor: 'pointer',
                      backgroundColor: '#f44336',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                  }}
                  onClick={handleDecrement}
              >
                  Decrement
              </button>

              <button 
                  style={{
                      padding: '10px 20px',
                      fontSize: '16px',
                      cursor: 'pointer',
                      backgroundColor: '#3b578f',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                  }}
                  onClick={handleReset}
              >
                  Reset
              </button>
            </div>    
          </div>
        </div>
      </div>
        )
    }

export default App;
