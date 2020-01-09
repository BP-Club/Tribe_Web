let config = {
  version:"1.0",
  appName:"nr",
  target:this.appName,
  isMock:false,
  apiUrl:{
    MOCK:"/MOCK",
    DEV:{
      1:"DEV/rest"
    },

  },
  getApiUrl(type = 1){
    return this.apiUrl.DEV[type]
  }
};
export default config;
