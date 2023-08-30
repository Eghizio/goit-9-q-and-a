const auth = (req, res, next) => {
  const authHeader = res.getHeader("Authorization"); // "Bearer _daskbdasifbsiadufbisudf"
  const token = authHeader.slice(7); //_daskbdasifbsiadufbisudf
  
  const isLegit = jwt.verify(token);
  
  if(isLegit) next();

  throw new Error("Dupa, nie przejdziesz! You shall not pass!");
};