import {createPlugin, PluginType} from "../../pluginBuilder";

const pluginName = "helloPlugin";
const pluginType = PluginType.COMMUNITY;

const helloPlugin = createPlugin(pluginType, pluginName);

export default helloPlugin;