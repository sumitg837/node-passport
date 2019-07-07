module.exports = {
	'env': 'dev',
	'dev':{
		'passport' :{
			'secret': 'SECRET_KEY',
			'maxAge': 60000
		},
		'db':{
			'client': 'mysql',
			'host': '127.0.0.1',
			'port': '3306',
			'user': 'YOUR_DB_USER',
			'password': 'YOUR_DB_PASSWORD',
			'database': 'YOUR_DB_NAME',
			'charset': 'utf8',
			'timezone': 'UTC',
			'pool':{
					'min': 1,
					'max':10
				},
		}
	}
}