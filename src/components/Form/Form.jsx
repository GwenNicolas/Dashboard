import "./Form.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "../Button/Button";
import Checkboxes from "../Checkbox/Checkbox";
import CustomButton from "../Button/Button";



const ariaLabel = { 'aria-label': 'description' };

export default function Form ({authentication, isContactForm}) {


    return  (
        <div className="form-container">
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

            <form className="form">
                {isContactForm ? (
                    <>
                        <div className="input-container">
                            <TextField
                                helperText="Entrez votre nom et prénom s'il vous plaît"
                                id="fullName"
                                label="Nom Prénom"
                                variant="standard"
                                className="input-style"
                                placeholder="Jane Doe"
                                InputProps={{ inputProps: ariaLabel }}
                            />
                        </div>
                        <div className="input-container">
                            <TextField
                                helperText="Entrez votre numéro de téléphone s'il vous plaît"
                                id="phone"
                                label="N° téléphone"
                                variant="standard"
                                className="input-style"
                                placeholder="0123456789"
                                InputProps={{ inputProps: ariaLabel }}
                            />
                        </div>
                        <div className="input-container">
                            <TextField
                                helperText="Entrez votre adresse email s'il vous plaît"
                                id="email"
                                label="Email"
                                variant="standard"
                                className="input-style"
                                placeholder="jane-doe@gmail.com"
                                InputProps={{ inputProps: ariaLabel }}
                            />
                        </div>
                        <div className="input-container">
                            <TextField
                                helperText="Entrez votre message s'il vous plaît"
                                id="message"
                                label="Message"
                                variant="standard"
                                className="input-style"
                                multiline
                                rows={4}
                            />
                        </div>
                        <div className="input-container">
                            <CustomButton authentication={authentication} isContactForm={isContactForm} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="input-container">
                            <TextField
                                helperText="Entrez votre identifiant s'il vous plaît"
                                id="username"
                                label="Identifiant"
                                variant="standard"
                                className="input-style"
                                placeholder="Jane Doe"
                                InputProps={{ inputProps: ariaLabel }}
                            />
                        </div>
                        <div className="input-container">
                            <TextField
                                helperText="Entrez votre email s'il vous plaît"
                                id="email"
                                label="Email"
                                variant="standard"
                                className="input-style"
                                placeholder="jane-doe@gmail.com"
                                InputProps={{ inputProps: ariaLabel }}
                            />
                        </div>
                        <div className="input-container">
                            <TextField
                                helperText="Entrez votre mot de passe s'il vous plaît"
                                id="password"
                                label="Mot de Passe"
                                variant="standard"
                                className="input-style"
                            />
                        </div>
                        {authentication && (
                            <div className="input-container">
                                <Checkboxes authentication={authentication} />
                            </div>
                        )}
                        <div>
                            <Button authentication={authentication} />
                        </div>
                        {authentication && (
                            <div className="forgot-password">
                                <a href="/reset-password">Mot de passe oublié ?</a>
                            </div>
                        )}
                    </>
                )}
            </form>
            </Box>
        </div>
    );
}