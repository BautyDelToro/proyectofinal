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
                
            <form action="" className='formulario' method='post'>
                <label>
                    Nombre<input type="text" name='nombre'/>
                </label>
        
                <label>
                    Mail <input type="email" name='mail'/>
                </label>
                
                <label>
                    <textarea name="comentarios"></textarea>
                </label>
        
                <input type="hidden" name="form-name" value="contacto" />

                <input type="submit" name='enviar' />
            </form>
        </div>
    )
}