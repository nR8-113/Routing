import kk from '../assets/kk.jpg'
function About(){
    return(
    <>
    <h1>About Movie</h1>
     
     <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
                maxWidth: '1000px',
                margin: '0 auto',
            }}>
                
                <div>
                    <img src={kk}  width="450px" style={{ borderRadius: '5px' }} />
                </div>

                
                <div style={{ maxWidth: '600px', textAlign: 'left' }}>
        <h1>Kishkindha Kaandam</h1>
        <p>Strange events unfold in a monkey-inhabited village, prompting a newlywed pair and forest officials to embark on a mission to uncover the root cause of the peculiar disturbances.</p>
        </div>
        </div>
    </>
    

    
    
    )
    }
    export default About 