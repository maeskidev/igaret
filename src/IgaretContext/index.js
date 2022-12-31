import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const IgaretContex = React.createContext();

function IgaretProvider(props){



    // const [count, setCount] = React.useState(datos);
    const {
      item: cigarettes,
      saveItem: saveCigarettes,

    } = useLocalStorage("cigarettes", [])

    const [lastWeek, setLastWeek] = React.useState([])

    const addCigarette = () => {

      const lastDay = cigarettes.length-1
      const todayDate = new Date().toLocaleDateString("es-us",{ weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit'})
      
      const added = [...cigarettes];

      //valida si es el primer dia que se agrega
      if(!added || added === [] || added.length === 0){
        added.push([{dia: todayDate}])
        saveCigarettes(added)

      }
      else {
        // valida que ya exista un dia y que sea el mismo dia para concatener
        if(added[lastDay][added[lastDay].length-1].dia === todayDate){
          added[lastDay].push({dia: todayDate})
          saveCigarettes(added)
        }else{
          if(added.length === 7){
            // si se cumple una semana se reinicia todos y se guarda la semana que paso
            const lastWeekAux = [...lastWeek]
            setLastWeek(lastWeekAux)
            console.log("777777");
            restartAll()
            
          }else{
            // si es otro dia, y no ah pasado una semana lo agrega en una nueva posicion
            added.push([{dia: todayDate}])
            saveCigarettes(added)

          }
        }
      }
      

      // saveCigarettes(added)

    }

    const restartAll = ()  => {
      saveCigarettes('')
    }



    return (
        <IgaretContex.Provider
          value={{
            cigarettes,
            addCigarette,
            restartAll
          }}
        >
          {props.children}
        </IgaretContex.Provider>
      );
}

export { IgaretContex, IgaretProvider};