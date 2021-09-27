import React, { useEffect, useRef } from 'react';
import ShelfImage from '../../static/shelf_image.jpeg';

const ImageComp: React.FC<any> = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    const loadCanvas = (canvas: any) => {
        const ctx= canvas.getContext('2d');

        // creating rectangles
        ctx.strokeStyle = 'blue';
        ctx.strokeRect(100, 100, 10, 10);
        ctx.strokeRect(120, 150, 100, 100);
        ctx.strokeRect(35, 90, 30, 30);
        ctx.strokeRect(45, 70, 100, 100);

        const img = new Image();
        img.src = ShelfImage;
        img.onload = drawImageScaled.bind(null, img, ctx);       
    }

    const drawImageScaled = (img: HTMLImageElement, ctx: any) => {
        const canvas = ctx.canvas;
        const hRatio = canvas.width / img.width;
        const vRatio =  canvas.height / img.height;
        const ratio  = Math.min(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width*ratio) / 2;
        const centerShift_y = (canvas.height - img.height*ratio) / 2;  
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width*ratio, img.height*ratio);  
    }

    useEffect(() => {
        loadCanvas(canvasRef.current);
    }, []);

    return (
        <div className="image">
            <h2></h2>
            <div>
                <canvas
                    ref={canvasRef}
                    height="500px"
                    width="500px"
                ></canvas>
            </div>
        </div>
    );
}

export default ImageComp;