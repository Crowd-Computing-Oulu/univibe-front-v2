// import React from 'react';
// import { Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

// const SectionFive = ({ responses, handleChange }) => {
//     return (
//         <div>
//             <Typography variant="h6">Workspace Functionality</Typography>

//             {/* Social Activities Facilitation */}
//             <FormControl component="fieldset" style={{ marginTop: '20px' }}>
//                 <FormLabel component="legend">Social Activities Facilitation:</FormLabel>
//                 <RadioGroup
//                     name="socialActivitiesFacilitation"
//                     value={responses.socialActivitiesFacilitation}
//                     onChange={handleChange}
//                 >
//                     <FormControlLabel value="1" control={<Radio />} label="1: Not effective at all" />
//                     <FormControlLabel value="2" control={<Radio />} label="2" />
//                     <FormControlLabel value="3" control={<Radio />} label="3" />
//                     <FormControlLabel value="4" control={<Radio />} label="4: Highly effective" />
//                 </RadioGroup>
//             </FormControl>

//             {/* Cooperation Facilitation */}
//             <FormControl component="fieldset" style={{ marginTop: '20px' }}>
//                 <FormLabel component="legend">Cooperation Facilitation:</FormLabel>
//                 <RadioGroup
//                     name="cooperationFacilitation"
//                     value={responses.cooperationFacilitation}
//                     onChange={handleChange}
//                 >
//                     <FormControlLabel value="1" control={<Radio />} label="1: Not helpful at all" />
//                     <FormControlLabel value="2" control={<Radio />} label="2" />
//                     <FormControlLabel value="3" control={<Radio />} label="3" />
//                     <FormControlLabel value="4" control={<Radio />} label="4: Extremely helpful" />
//                 </RadioGroup>
//             </FormControl>

//             {/* Concentration Facilitation */}
//             <FormControl component="fieldset" style={{ marginTop: '20px' }}>
//                 <FormLabel component="legend">Concentration Facilitation:</FormLabel>
//                 <RadioGroup
//                     name="concentrationFacilitation"
//                     value={responses.concentrationFacilitation}
//                     onChange={handleChange}
//                 >
//                     <FormControlLabel value="1" control={<Radio />} label="1: Not helpful at all" />
//                     <FormControlLabel value="2" control={<Radio />} label="2" />
//                     <FormControlLabel value="3" control={<Radio />} label="3" />
//                     <FormControlLabel value="4" control={<Radio />} label="4: Extremely helpful" />
//                 </RadioGroup>
//             </FormControl>

//             {/* Recovery Facilitation */}
//             <FormControl component="fieldset" style={{ marginTop: '20px' }}>
//                 <FormLabel component="legend">Recovery Facilitation:</FormLabel>
//                 <RadioGroup
//                     name="recoveryFacilitation"
//                     value={responses.recoveryFacilitation}
//                     onChange={handleChange}
//                 >
//                     <FormControlLabel value="1" control={<Radio />} label="1: Does not facilitate" />
//                     <FormControlLabel value="2" control={<Radio />} label="2" />
//                     <FormControlLabel value="3" control={<Radio />} label="3" />
//                     <FormControlLabel value="4" control={<Radio />} label="4: Greatly facilitates" />
//                 </RadioGroup>
//             </FormControl>
//         </div>
//     );
// };

// export default SectionFive;


import React from 'react';
import { Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Paper } from '@mui/material';

const SectionFive = ({ responses, handleChange }) => {
    return (
        <>
            <Typography variant="h6" sx={{ textAlign: 'center', my: 2 }}>Workspace Functionality</Typography>

            {/* Social Activities Facilitation */}
            <Paper elevation={3} sx={{ p: 3, mt: 2, mb: 2, backgroundColor: '#f0f8ff' }}>
                <FormControl component="fieldset" sx={{ mt: 3, mb: 3 }}>
                    <FormLabel component="legend">Social Activities Facilitation:</FormLabel>
                    <RadioGroup
                        name="socialActivitiesFacilitation"
                        value={responses.socialActivitiesFacilitation}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="1" control={<Radio />} label="1: Not effective at all" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4: Highly effective" />
                    </RadioGroup>
                </FormControl>
            </Paper>

            {/* Cooperation Facilitation */}
            <Paper elevation={3} sx={{ p: 3, mt: 2, mb: 2, backgroundColor: '#f0f8ff' }}>
                <FormControl component="fieldset" sx={{ mt: 3, mb: 3 }}>
                    <FormLabel component="legend">Cooperation Facilitation:</FormLabel>
                    <RadioGroup
                        name="cooperationFacilitation"
                        value={responses.cooperationFacilitation}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="1" control={<Radio />} label="1: Not helpful at all" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4: Extremely helpful" />
                    </RadioGroup>
                </FormControl>
            </Paper>

            {/* Concentration Facilitation */}
            <Paper elevation={3} sx={{ p: 3, mt: 2, mb: 2, backgroundColor: '#f0f8ff' }}>
                <FormControl component="fieldset" sx={{ mt: 3, mb: 3 }}>
                    <FormLabel component="legend">Concentration Facilitation:</FormLabel>
                    <RadioGroup
                        name="concentrationFacilitation"
                        value={responses.concentrationFacilitation}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="1" control={<Radio />} label="1: Not helpful at all" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4: Extremely helpful" />
                    </RadioGroup>
                </FormControl>
            </Paper>

            {/* Recovery Facilitation */}
            <Paper elevation={3} sx={{ p: 3, mt: 2, mb: 2, backgroundColor: '#f0f8ff' }}>
                <FormControl component="fieldset" sx={{ mt: 3, mb: 3 }}>
                    <FormLabel component="legend">Recovery Facilitation:</FormLabel>
                    <RadioGroup
                        name="recoveryFacilitation"
                        value={responses.recoveryFacilitation}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="1" control={<Radio />} label="1: Does not facilitate" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4: Greatly facilitates" />
                    </RadioGroup>
                </FormControl>
            </Paper>
        </>
    );
};

export default SectionFive;
