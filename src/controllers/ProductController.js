const mongoose = require('mongoose');

const Product = mongoose.model('Products');

module.exports  = {
	//Lista tudo
	async index(req,res){
		const { page = 1}  = req.query;
		const products = await Product.paginate({},{page,limit:10});
		return res.json(products);
	},
	
	
	//Mostrando produto único
	async show(req,res){
		const product = await Product.findById(req.params.id);
		return res.json(product);
	},
	
	//Criando
	async store(req,res){
		const product = await Product.create(req.body);
		return res.json(product);
	},
	
	//atualizando
	async update(req,res){
		const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
		return res.json(product);
	},
	
	//deletar produto
	async delete(req,res){
		await Product.findByIdAndRemove(req.params.id);
		return res.send();
	}
};