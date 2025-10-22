import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {

    const { data, loading} = useFetch("/hotels/countByType");

    const images = ["https://cf.bstatic.com/xdata/images/hotel/square240/706413014.webp?k=f7866c2297114620c3e6081807938e89839ef2e48d5798fbdc61f4622672789a&o=" , 
                        "https://cf.bstatic.com/xdata/images/hotel/square240/35510269.webp?k=4a3f78ab1094d6e5225b2fac672c0e1e26770fc0a4ade20220c639405a99c5f9&o=" , 
                       "https://cf.bstatic.com/xdata/images/hotel/square240/732701058.webp?k=91e87a6756bdc481ae997676ba72b751035d95c9c7996511c2ed09fc58fcb3f7&o=" , 
                       "https://cf.bstatic.com/xdata/images/hotel/square240/599978955.webp?k=f5152a5eb35b6361e08ac40adf3f9e7bc1a08337ccd9b06a53d6f69b2f309b64&o=" , 
                       "https://cf.bstatic.com/xdata/images/hotel/square240/606768682.webp?k=109d7925c7948d2e3db9cb6279ca2639bbca4f36c9a9c7f7be95df70465fbfef&o="
           ];
   
           return (
             <div className="pList">
               {loading ? ("please wait. Loading") : (
                  <>
                  {data && images.map((img ,i) => (
                       <div className="pListItem" key={i}>
                           <img src={img} alt="" className="pListImg" />
                           <div className="pListTitles">
                                <h1>{data[i]?.type}</h1>
                                <h2>{data[i]?.count} {data[i]?.type}</h2>
                           </div>
                       </div>
                   ))}
                   </>
               
           )}
            </div>
          );
        };

export default PropertyList;