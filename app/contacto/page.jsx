import './contacto.css'

export default function Contacto(){
    return(
        <div>
            <div id='divtitulo'>
                <h2 id='titulo'>Contact us</h2>
            </div>
            <form 
                action='./gracias'
                name='contacto' 
                hidden data-netlify="true"  
                netlify-honeypot="bot-field"> {/*esto de aca es necesario, cosas de netlify*/}
                <input type="text" name='nombre'/>
                <input type="email" name="mail"/>
                <textarea name="comentarios"></textarea>
            </form>
                
            
            <div className='divFormulario'>

                <form action="" className="formulario" method='post'>
                    <h2>Coments</h2>
                    <label className="Label">
                        <input type="text" name='nombre' className='Nombre' placeholder="Name"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="svgPerfil" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>
                    </label>
            
                    <label className='Label'>
                        <input type="email" name='mail' className='mail' placeholder="Email"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="svgPerfil" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                        </svg>
                    </label>
                    
                    <label className='Label'>
                        <textarea name="comentarios" className='comentarios' placeholder='Coments'></textarea>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="svgPerfil" viewBox="0 0 16 16">
                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
                        </svg>
                    </label>
            
                    <input type="hidden" name="form-name" value="contacto" />

                    <div className='Label'>
                        <input type="submit" value="Submit" name='Submit' className='submit' /> 
                    </div>
                </form> 
                
                <div className='divImagenes'>
                <img src="./imagenes/Diantha.webp" alt="Diantha" className='Diantha'/>
                <img src="./imagenes/Gardevoir.png" alt="Gardevoir" className='Gardevoir'/>
                </div>
            </div>
            
            
        </div>
    )
}