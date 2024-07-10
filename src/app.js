let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = [".com", ".net", ".es"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let e = 0; e < extensions.length; e++) {
        console.log(pronoun[i] + adj[j] + noun[k] + extensions[e]);
      }
    }
  }
}
