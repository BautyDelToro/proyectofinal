import './contacto.css'

export default function Contacto(){
    return(
        <div>
            <h2>olaa</h2>
            <form 
                action='./contacto/gracias'
                name='contacto' 
                hidden data-netlify="true"  
                netlify-honeypot="bot-field"> {/*esto de aca es necesario, cosas de netlify*/}
                <input type="text" name='nombre'/>
                <input type="email" name="mail"/>
                <textarea name="comentarios"></textarea>
            </form>
                
            <div className='divFormulario'>
                <form action="" className="formulario" method='post'>
                <label className="Nombre">
                    Name<input type="text" name='nombre'/>
                </label>
        
                <label className='mail'>
                    Mail <input type="email" name='mail' className='aa'/>
                </label>
                
                <label className='comentarios'>
                    <textarea name="comentarios"></textarea>
                </label>
        
                <input type="hidden" name="form-name" value="contacto" />

                <input type="submit" value="Submit" name='Submit' className='submit' />
                </form> 
            </div>
            
            
        </div>
    )
}