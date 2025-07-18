CREATE TABLE Bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(100),
  lastName VARCHAR(100),
  email VARCHAR(150),
  phone VARCHAR(50),
  eventType VARCHAR(100),
  eventDate DATE,
  venue VARCHAR(200),
  guests INT,
  budget VARCHAR(100),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE CompanyEnquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(100),
  lastName VARCHAR(100),
  email VARCHAR(150),
  phone VARCHAR(50),
  companyEnquire VARCHAR(100),
  additionalDetails TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 