let API_KEY = '';
let REGION = null;
let LANGUAGE = "pt";
const GOOGLE_API = "https://maps.google.com/maps/api/geocode/json";
const DEBUG = true;

async function handleUrl(url) {
  const response = await fetch(url).catch(() =>
    Promise.reject(new Error("Error fetching data"))
  );

  const json = await response.json().catch(() => {
    return Promise.reject(new Error("Error parsing server response"));
  });

  if (json.status === "OK") {
    return json;
  }
  return Promise.reject(
    new Error(
      `${json.error_message}.\nServer returned status code ${json.status}`
    )
  );
}


export default {
    /**
     *
     *
     * @param {string} apiKey
     */
    setApiKey(apiKey) {
      API_KEY = apiKey;
    },
  
    /**
     *
     *
     * @param {string} language
     */
    setLanguage(language) {
      LANGUAGE = language;
    },
  
    /**
     *
     *
     * @param {string} region
     */
    setRegion(region) {
      REGION = region;
    },
  
  
    /**
     *
     *
     * @param {string} lat
     * @param {string} lng
     * @param {string} [apiKey]
     * @param {string} [language]
     * @param {string} [region]
     * @returns {Promise}
     */
    async fromLatLng(lat, lng, apiKey, language, region) {
      if (DEBUG)
        return "Rua Joao Inácio Veloso, Itapevi";

      if (!lat || !lng) {
        return Promise.reject(new Error("Provided coordinates are invalid"));
      }
  
      const latLng = `${lat},${lng}`;
      let url = `${GOOGLE_API}?latlng=${encodeURIComponent(latLng)}`;
  
      if (apiKey || API_KEY) {
        API_KEY = apiKey || API_KEY;
        url += `&key=${API_KEY}`;
      }
  
      if (language || LANGUAGE) {
        LANGUAGE = language || LANGUAGE;
        url += `&language=${LANGUAGE}`;
      }
  
      if (region || REGION) {
        REGION = region || REGION;
        url += `&region=${encodeURIComponent(REGION)}`;
      }
  
      return handleUrl(url);
    },
  
    /**
     *
     *
     * @param {string} address
     * @param {string} [apiKey]
     * @param {string} [language]
     * @param {string} [region]
     * @returns {Promise}
     */
    async fromAddress(address, apiKey, language, region) {
      if (DEBUG)
        return { lat: 546546, long: 36712968};

      if (!address) {
        return Promise.reject(new Error("Provided address is invalid"));
      }
  
      let url = `${GOOGLE_API}?address=${encodeURIComponent(address)}`;
  
      if (apiKey || API_KEY) {
        API_KEY = apiKey || API_KEY;
        url += `&key=${API_KEY}`;
      }
  
      if (language || LANGUAGE) {
        LANGUAGE = language || LANGUAGE;
        url += `&language=${LANGUAGE}`;
      }
  
      if (region || REGION) {
        REGION = region || REGION;
        url += `&region=${encodeURIComponent(REGION)}`;
      }
  
      return handleUrl(url);
    }
  };