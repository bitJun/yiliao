// @ts-ignore
import Mock from 'mockjs';
import user from './user';
Mock.mock(/\/user\/login/, 'post', (req, res) => {
    return user.getLogin(req, res);
});
Mock.mock(/\/user\/info/, 'post', (req, res) => {
    return user.getInfo(req, res);
});
Mock.mock(/\/user\/menu/, 'get', (req, res) => {
    return user.getMenu(req, res);
});
Mock.mock(/\/user\/permission/, 'get', (req, res) => {
    return user.getPermission(req, res);
});
Mock.mock(/\/file\/upload/, 'post', (req, res) => {
    return user.getUpload(req, res);
});
export default Mock;
//# sourceMappingURL=index.js.map