import appUrls from "../global/appUrls";
import axios from 'axios'

export default {
  openFnc(){
    return new Promise((resolve, reject) => {
      axios.get(appUrls.API_TEST.path).then(res => {
        console.log(res.data.data);
        resolve(res.data);
      }).catch(err => {
        reject(err);
      })
    })
  }
}
