import "./Submit.css";

export default function Submit () {



    const handleInputChange = (event) => {
        const input = event.target;
        const label = input.previousSibling;

        if (input.value !== '') {
            label.classList.add('hidden');
        } else {
            label.classList.remove('hidden');
        }
    };

    return  (
        <div className="form-container">
            <form className="mx-auto mt-20">
                <div className="input-container">
                    <label htmlFor="username">Identifiant</label>
                    <input type="text" name="username" className="input-style" onInput={handleInputChange} />
                </div>
                <div className="input-container">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" className="input-style" onInput={handleInputChange} />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" className="input-style" onInput={handleInputChange} />
                </div>
                <div className="input-container">
                    <div className="checkbox-container">
                        <input type="checkbox" id="remember" className="checkbox-style"/>
                        <label htmlFor="remember" className="checkbox-label">Rester connecté.e</label>
                    </div>
                </div>

                    <button type="submit">Se connecter</button>

                    <button type="submit">S'inscrire</button>

                <div className="forgot-password">
                    <a href="/reset-password">Mot de passe oublié ?</a>
                </div>
            </form>
        </div>
    );
}
