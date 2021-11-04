import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Img1 from '../../assets/image/02.jpg'
import Img2 from '../../assets/image/walpaper.jpg'
import Img3 from '../../assets/image/nature1.jpg'

import './reactSwiper.css'

const slideImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1610085927744-7217728267a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=382&q=80' },
    { id: 2, src: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' },
    { id: 3, src: 'https://images.unsplash.com/photo-1615572766543-06c21416eb05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=327&q=80' },
    { id: 4, src: 'https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=395&q=80' },
    { id: 5, src: 'https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' },
    { id: 6, src: 'https://images.unsplash.com/photo-1613749030206-9f59d27a28b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80' },
    { id: 7, src: 'https://images.unsplash.com/photo-1549222945-0ca3a530493c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80' },
    { id: 8, src: 'https://images.unsplash.com/photo-1549222945-0ca3a530493c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80' },
    { id: 9, src: 'https://images.unsplash.com/photo-1549222945-0ca3a530493c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80' },
    { id: 10, src: 'https://images.unsplash.com/photo-1549222945-0ca3a530493c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80' },
    { id: 11, src: 'https://images.unsplash.com/photo-1549222945-0ca3a530493c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80' },
    { id: 12, src: 'https://images.unsplash.com/photo-1549222945-0ca3a530493c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80' },
    { id: 13, src: 'https://images.unsplash.com/photo-1549222945-0ca3a530493c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80' },
]

function ReactSwiper() {

    return (
        <div className="container">
            {slideImages.map(({ id, src }) => (
                <div key={id} className="image-slide">
                    <img src={src} className="img" />
                </div>
            ))}
        </div>
    )
}

export default ReactSwiper
