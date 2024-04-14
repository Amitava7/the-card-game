import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState, type FC } from 'react';

interface CardProps {
    suit: string;
    value: string;
 }


const Card: FC<CardProps> = (props) => {
    const {suit, value} = props;
    const [loading, setLoading] = useState(true)
    const [imageError, setError] = useState<unknown>(null)
    const [image, setImage] = useState<string|undefined>(undefined)

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`./assets/${value}_of_${suit}.png`) 
                setImage(response.default)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchImage()
    }, [suit, value])

    if (loading) {
        return <CircularProgress/>
    }
    if (imageError) {
        return <Box>Error loading image</Box>
    }
    return (<Box
        component="img"
        sx={{
            height: 150,
            width: 90,
        }}
        alt={`The ${value} of ${suit}`}
        src={image}
    />);
}

export default Card;
