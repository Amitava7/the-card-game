import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState, type FC } from 'react';

type CardProps= {
    value: string;
    back?: never;
 } | {
    value?: never;
    back: boolean;
 }


const Card: FC<CardProps> = (props) => {
    const { value, back} = props;
    const [loading, setLoading] = useState(true)
    const [imageError, setError] = useState<unknown>(null)
    const [image, setImage] = useState<string|undefined>(undefined)

    useEffect(() => {
        const fetchImage = async () => {
            const url = back ? `./assets/back.png` :`./assets/${value}.png`
            try {
                const response = await import(url) 
                setImage(response.default)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchImage()
    }, [value, back])

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
        alt={`The ${value} `}
        src={image}
    />);
}

export default Card;
