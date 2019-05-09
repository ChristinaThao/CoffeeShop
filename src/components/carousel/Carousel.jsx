import React from 'react';

const ImageSlide = ({url}) => {
    const styles = {
        backgroundImage: `url(+${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (
        <div className="image-slide" style={styles}></div>
    )
}
//'url(' + require('../../img/coffee-pour.jpg') + ')'
export default class carousel extends React.Component {
    render() {
        return(
            <div id="carousel">
                <h1>carousel</h1>
                <ImageSlide url={'src/img/bakery.jpg'}/>
            </div>
        )
    }
}