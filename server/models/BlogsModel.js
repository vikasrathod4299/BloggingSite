
module.exports = mongoose => {
    const newSchema = new mongoose.Schema({
        title:String,
        auther:{type:String, default:"Vikas Rathod"},
        content:String,
        date:{type: Date, default:Date.now},
        type:{type:String, default:'Artical'}
    });
    const Blogs = mongoose.model('Blogs', newSchema);
    return Blogs;
  };