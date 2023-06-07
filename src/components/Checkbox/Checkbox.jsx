import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function Checkboxes({authentication}) {
    return (
        <div>
            {!authentication && (
                <FormControlLabel
                    control={<Checkbox color="default" />}
                    label="Rester connecté.e"
                />
            )}
        </div>
    );
}