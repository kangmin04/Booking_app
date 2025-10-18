      import React from 'react';
      import './propertyList.css';
      
      const PropertyList = () => {
        return (
          <div className="pList">
              <div className="pListItem">
                  <img src="https://cf.bstatic.com/xdata/images/hotel/square240/706413014.webp?k=f7866c2297114620c3e6081807938e89839ef2e48d5798fbdc61f4622672789a&o=" alt="" className="pListImg" />
                  <div className="pListTitles">
                     <h1>hotels</h1>
                     <h2>233 hotels</h2>
                 </div>
             </div>
             <div className="pListItem">
                 <img src="https://cf.bstatic.com/xdata/images/hotel/square240/35510269.webp?k=4a3f78ab1094d6e5225b2fac672c0e1e26770fc0a4ade20220c639405a99c5f9&o=" alt="" className="pListImg" />
                 <div className="pListTitles">
                     <h1>Apartments</h1>
                     <h2>211 Apartments</h2>
                 </div>
             </div>
             <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square240/732701058.webp?k=91e87a6756bdc481ae997676ba72b751035d95c9c7996511c2ed09fc58fcb3f7&o=" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>150 Resorts</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square240/599978955.webp?k=f5152a5eb35b6361e08ac40adf3f9e7bc1a08337ccd9b06a53d6f69b2f309b64&o=" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>120 Villas</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square240/606768682.webp?k=109d7925c7948d2e3db9cb6279ca2639bbca4f36c9a9c7f7be95df70465fbfef&o=" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Cabins</h1>
                    <h2>85 Cabins</h2>
                </div>
            </div>
         </div>
       );
     };
     
     export default PropertyList;