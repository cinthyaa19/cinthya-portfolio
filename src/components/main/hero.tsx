export default function Hero() {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img 
                    alt="..." 
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" 
                    className="max-w-sm rounded-full shadow-2xl" 
                />
                <div>
                    <p className="py-6">
                        Hello There!
                    </p>
                    <h1 className="text-5xl font-bold">
                        I am Cinthya <br /> Achwatul Ifnu
                    </h1>
                    <p className="py-6">
                        Frontend Developer & UI/UX Designer
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}
