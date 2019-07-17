import {createPlugin, PluginType} from "../../pluginBuilder";

const pluginName = "authPlugin";
const pluginType = PluginType.SYSTEM;

const authPlugin = createPlugin(pluginType, pluginName);
