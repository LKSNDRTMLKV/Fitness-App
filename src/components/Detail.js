import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ]
    function Capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        exerciseDetail ?
            (
                <Stack gap="60px" sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }} >

                    <img src={gifUrl} alt="name" loading="lazy" className="detail-image" />
                    <Stack sx={{ gap: { lg: "35px", xs: "20px" } }} >
                        <Typography variant='h2' textTransform="capitalize" color="#FF2625">{name}</Typography>
                        <Typography variant="h5">
                            Exercises keep you strong. {Capitalize(`${name}`)} is one of the best exercises
                            to target your {target}. It will help you improve your mood and energy!
                        </Typography>
                        {extraDetail.map((item, idx) => (
                            <Stack key={idx} direction="row" gap="24px" alignItems="center">
                                <Button sx={{ background: "#fff2db", borderRadius: "50%", width: "100px", height: "100px" }}>
                                    <img src={item.icon} alt={item.name} />
                                </Button>
                                <Typography variant="h5" textTransform="capitalize">{item.name}</Typography>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
            )
            :
            <Typography variant="h2" sx={{m:"40px"}}> 404 Exercise Not Found!</Typography>
    );
};

export default Detail;