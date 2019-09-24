import axios from 'axios'
// 创建axios实例
var $ajax = axios.create({timeout: 1000 * 12});
export default $ajax
