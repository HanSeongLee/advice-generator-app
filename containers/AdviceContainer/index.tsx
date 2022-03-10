import React, {useCallback, useState} from "react";
import Card from "../../components/Card";
import axios from 'axios';

const AdviceContainer: React.FC = () => {
    const [data, setData] = useState({
        slip: {
            id: 117,
            advice: 'It is easy to sit up and take notice, what\'s difficult is getting up and taking action.',
        },
    });
    const [loading, setLoading] = useState(false);

    const requestRandomAdvice = useCallback(async () => {
        setLoading(true);
        const {data} = await axios.get('https://api.adviceslip.com/advice');
        setData(data);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    return (
        <Card subtitle={`ADVICE #${data?.slip?.id}`}
              title={`“${data?.slip?.advice}”`}
              loading={loading}
              onClick={requestRandomAdvice}
        />
    );
};

export default AdviceContainer;
