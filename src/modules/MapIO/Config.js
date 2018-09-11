import MakeConfig from '../MakeConfig'; import Category from '../Category';

export default MakeConfig(__dirname, {
    id: "mapIO",
    name: "Map Importer/Exporter",
    description: "Allows exporting and importing of maps",
    category: Category.exportImport,

});
