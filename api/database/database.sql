CREATE TABLE tipo(
	tipo INTEGER PRIMARY KEY AUTOINCREMENT,
	nombre VARCHAR(50) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contacto(
	contacto INTEGER PRIMARY KEY AUTOINCREMENT,
	codigo VARCHAR(5) NOT NULL,
	numero VARCHAR(20) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE denuncia(
	denuncia INTEGER PRIMARY KEY AUTOINCREMENT,
	nombre VARCHAR(50) NULL,
	comentario VARCHAR(400) NOT NULL,
	valoracion INTEGER NULL,
	tipo INTEGER NOT NULL,
	contacto INTEGER NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY(tipo) REFERENCES tipo(tipo) ON DELETE CASCADE,
	FOREIGN KEY(contacto) REFERENCES contacto(contacto) ON DELETE CASCADE
);

INSERT INTO tipo(nombre) VALUES("Sin especificar");
INSERT INTO tipo(nombre) VALUES("Llamada perdida");

INSERT INTO contacto(codigo, numero) VALUES("502", "12345678");
INSERT INTO contacto(codigo, numero) VALUES("502", "12345679");
INSERT INTO contacto(codigo, numero) VALUES("502", "12345670");

INSERT INTO denuncia(nombre, comentario, valoracion, tipo, contacto) VALUES("Anónimo", "Llamada extraña", 1, 1, 1);
INSERT INTO denuncia(nombre, comentario, valoracion, tipo, contacto) VALUES("Juan", "Llamada perdida", 2, 1, 1);
