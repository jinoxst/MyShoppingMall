export const Constant = {
  IMG_PROTOCOL: 'http',
  API_PROTOCOL: 'https',
  API_URL: 'test.vr-ipx.com',
  API_PORT: 50052,
  json: {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  },
};

export const Config = {
  LIST_URL:Constant.API_PROTOCOL + '://' + Constant.API_URL + ':' + Constant.API_PORT + '/getItemList',
  SOLDOUT_URL:Constant.API_PROTOCOL + '://' + Constant.API_URL + ':' + Constant.API_PORT + '/soldOut',
  IMAGE_URL:Constant.IMG_PROTOCOL + '://' + Constant.API_URL + '/TEST/images/',
  REFRESH_COLOR: '#FF00FF',
  ACTIVITYINDICATOR_SCALE: 1.5,
};

export default Config;