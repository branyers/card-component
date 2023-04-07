

const App = () => {
    return (
        <div className="container flex mx-auto items-center justify-center mt-10 lg:mt-44">
            <div className="grid-cols-1 grid-rows-4 row-start-1 row-end-4  grid lg:grid-cols-4 lg:grid-rows-3 w-[447px] h-[880px] lg:w-[800px] lg:h-[500px] rounded-lg">
                <div className="rounded-lg lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-4 bg-mobile-image lg:bg-desktop-image bg-cover bg-no-repeat bg-center w-[447px] h-[400px] lg:w-full lg:h-full ">
                    {/* <img className="w-full h-full rounded-lg" src="./src/assets/images/image-product-desktop.jpg" alt="" /> */}
                  
                </div>

                <div className="mt-[200px] lg:mt-0 p-4 lg:col-start-3 lg:col-end-5 flex flex-col lg:p-6 lg:flex-col">
                      <p className="mb-1 tracking-widest">Perfume</p>
                      <h1 className="lg:mb-10 text-6xl font-bold">Gabrielle Essence Eau De Parfum</h1>
                      <p className="text-gray-500">  A floral, solar and voluptuous interpretation composed by Olivier Polge, 
                        Perfumer-Creator for the House of CHANEL.</p>
                        <div className="flex gap-10 items-center mt-5 ">
                        <p className="text-3xl font-bold text-green-800 ">$149.99</p>
                        <p className="text-gray-500"><s>$169.99 </s></p>
                        </div>
                          <button className="bg-green-800 py-4 lg:p-3 rounded-lg mt-10">Add to Cart</button> 
                    </div>

                
            </div>       
        </div> 
    )
 }

 export default App;
