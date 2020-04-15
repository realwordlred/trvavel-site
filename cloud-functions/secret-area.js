exports.handler = function(event, context, callback){
	
	let body
	
	if(event.body){
		
		body = JSON.parse(event.body)
		
		
	}else{
		body = {}
		
	}
	
	if(body.password == "Admin123") {
		
		
		callback( null, {
		statusCode: 200,
		body:"welcome to the super secret area"
		
		
	})
		
	} else {
		callback( null, {
		statusCode: 401
		
		
		
	})
		
		
		
	}
	
	
	
	
	
}