import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function CustomButton({ authentication, isContactForm }) {
    return (
        <Box sx={{ '& button': { m: 1 } }}>
            {authentication ? (
                <div>
                    <Button size="large">Se Déconnecter</Button>
                </div>
            ) : (
                <div>
                    <Button size="large">Se Connecter</Button>
                </div>
            )}
            {!authentication && (
                <div>
                    {isContactForm ? (
                        <Button size="large">Envoyer</Button>
                    ) : (
                        <Button size="large">S'inscrire</Button>
                    )}
                </div>
            )}
        </Box>
    );
}
