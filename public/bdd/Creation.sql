-- Création de la base de données
CREATE DATABASE amazin;

-- Utilisation de la base de données
\c amazin;

-- Table Vendeur
CREATE TABLE "Vendeur" (
    "Nom" VARCHAR(100) PRIMARY KEY,
    "latitude" DECIMAL(9, 6),
    "longitude" DECIMAL(9, 6)
);

-- Table User
CREATE TABLE "User" (
    "Id" SERIAL PRIMARY KEY,
    "mdp" VARCHAR(100) NOT NULL,
    "nom" VARCHAR(50) NOT NULL,
    "prenom" VARCHAR(50) NOT NULL,
    "adresse" TEXT,
    "email" VARCHAR(100) UNIQUE NOT NULL
);

-- Table Produit
CREATE TABLE "Produit" (
    "Id" SERIAL PRIMARY KEY,
    "Nom" VARCHAR(100) NOT NULL,
    "prix" DECIMAL(10, 2) NOT NULL,
    "description" TEXT,
    "NomDuVendeur" VARCHAR(100),
    FOREIGN KEY ("NomDuVendeur") REFERENCES "Vendeur"("Nom")
);

-- Table Panier
CREATE TABLE "Panier" (
    "Id" SERIAL PRIMARY KEY,
    "UserId" INT NOT NULL,
    "ProduitId" INT NOT NULL,
    "Quantite" INT DEFAULT 1,
    FOREIGN KEY ("UserId") REFERENCES "User"("Id"),
    FOREIGN KEY ("ProduitId") REFERENCES "Produit"("Id")
);

-- Insertion des données dans la table Vendeur
INSERT INTO "Vendeur" ("Nom", "latitude", "longitude") VALUES
('Vendeur1', 48.8566, 2.3522),
('Vendeur2', 34.0522, -118.2437),
('Vendeur3', 51.5074, -0.1278);

-- Insertion des données dans la table User
INSERT INTO "User" ("mdp", "nom", "prenom", "adresse", "email") VALUES
('password123', 'Doe', 'John', '123 Main St', 'john.doe@example.com'),
('password456', 'Smith', 'Jane', '456 Elm St', 'jane.smith@example.com'),
('password789', 'Brown', 'Charlie', '789 Oak St', 'charlie.brown@example.com');

-- Insertion des données dans la table Produit
INSERT INTO "Produit" ("Nom", "prix", "description", "NomDuVendeur") VALUES
('Produit1', 19.99, 'Description du produit 1', 'Vendeur1'),
('Produit2', 29.99, 'Description du produit 2', 'Vendeur2'),
('Produit3', 39.99, 'Description du produit 3', 'Vendeur3');

-- Insertion des données dans la table Panier
INSERT INTO "Panier" ("UserId", "ProduitId", "Quantite") VALUES
(1, 1, 2),
(2, 2, 1),
(3, 3, 5);