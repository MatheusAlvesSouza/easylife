import React from 'react';
import { getAccountInfo } from '~/services/auth';
import { CustomCheckbox } from './ComboBox.style';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const accountInfo = getAccountInfo();

export default function CheckboxLabels() {
    const [state, setState] = React.useState({
        checkedFisica: accountInfo.cliente.deficiencias.includes(1),
        checkedAuditiva: accountInfo.cliente.deficiencias.includes(2),
        checkedVisual: accountInfo.cliente.deficiencias.includes(3),
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            Necessidades especiais:
            <br/>
            <FormControlLabel
            control={<CustomCheckbox checked={state.checkedFisica} onChange={handleChange} name="checkedFisica" />}
            label="Física"/>
            
            <FormControlLabel
            control={<CustomCheckbox checked={state.checkedAuditiva} onChange={handleChange} name="checkedAuditiva" />}
            label="Auditiva"/>
            
            <FormControlLabel
            control={<CustomCheckbox checked={state.checkedVisual} onChange={handleChange} name="checkedVisual" />}
            label="Visual"/>
        </div>
    );
}
