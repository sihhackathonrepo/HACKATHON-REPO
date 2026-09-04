* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: #f7faff;
  color: #10234b;
}

.navbar {
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7%;
  background: white;
  box-shadow: 0 2px 15px rgba(0,0,0,0.05);
}

.logo {
  font-size: 25px;
  font-weight: bold;
}

.logo span {
  color: #1455e6;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  text-decoration: none;
  color: #16264c;
}

button {
  cursor: pointer;
  border: none;
}

.login-btn {
  padding: 11px 25px;
  background: white;
  border: 1px solid #1455e6;
  border-radius: 8px;
  margin-right: 10px;
}

.start-btn,
.primary-btn {
  padding: 12px 25px;
  background: #1455e6;
  color: white;
  border-radius: 8px;
}

.hero {
  min-height: 500px;
  display: flex;
  justify-content: space-between;
  padding: 80px 7%;
  background: linear-gradient(
    120deg,
    #f5f9ff,
    #edf4ff
  );
}

.hero-left {
  width: 48%;
}

.badge {
  background: #eeeaff;
  color: #5336c9;
  padding: 10px 18px;
  border-radius: 20px;
  display: inline-block;
}

.hero h1 {
  font-size: 55px;
  margin: 25px 0;
  line-height: 1.05;
}

.hero h1 span {
  color: #1455e6;
}

.hero p {
  font-size: 18px;
  line-height: 1.7;
  color: #52617d;
}

.hero-buttons {
  margin-top: 30px;
}

.secondary-btn {
  padding: 12px 25px;
  margin-left: 15px;
  background: white;
  border: 1px solid #1455e6;
  color: #1455e6;
  border-radius: 8px;
}

.hero-right {
  width: 45%;
  position: relative;
}

.profile-card {
  width: 330px;
  margin: auto;
  padding: 25px;
  background: white;
  border-radius: 18px;
  box-shadow: 0 10px 40px rgba(30,60,120,.12);
}

.avatar {
  font-size: 60px;
  text-align: center;
}

.profile-card h2 {
  text-align: center;
}

.profile-card p {
  text-align: center;
  font-size: 14px;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 15px 0;
}

.skills span {
  background: #eef3ff;
  color: #1455e6;
  padding: 7px 12px;
  border-radius: 15px;
  font-size: 12px;
}

.match-card,
.company-card {
  position: absolute;
  padding: 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(30,60,120,.12);
}

.match-card {
  left: 0;
  top: 30px;
}

.company-card {
  right: 0;
  top: 100px;
}

.percentage {
  font-size: 30px;
  color: #0ca678;
  font-weight: bold;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 30px 7%;
}

.stat-card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 5px 25px rgba(0,0,0,.06);
}

.stat-card h2 {
  color: #1455e6;
  font-size: 30px;
}

.features {
  padding: 40px 7%;
  text-align: center;
}

.features h2 span {
  color: #1455e6;
}

.feature-container {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 25px;
  margin-top: 30px;
}

.feature-card {
  text-align: left;
  padding: 30px;
  border-radius: 18px;
  background: white;
  box-shadow: 0 5px 25px rgba(0,0,0,.07);
}

.feature-card .icon {
  font-size: 35px;
}

.feature-card h3 {
  margin: 15px 0;
}

.feature-card p {
  color: #66728c;
  line-height: 1.6;
}

.feature-card button {
  margin-top: 20px;
  padding: 10px 15px;
  background: #edf3ff;
  color: #1455e6;
  border-radius: 7px;
}

.cta {
  margin: 40px 7%;
  padding: 45px;
  border-radius: 20px;
  color: white;
  background: linear-gradient(100deg,#1455e6,#5124c9);
}

.cta button {
  margin-top: 20px;
  padding: 12px 25px;
  border-radius: 8px;
  color: #1455e6;
}

footer {
  background: #071a3c;
  color: white;
  padding: 50px 7%;
  text-align: center;
}
