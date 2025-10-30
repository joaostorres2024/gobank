const menuItems = document.querySelectorAll(".menu-li");
const dropdowns = document.querySelectorAll(".dropdown");

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    let targetId = null;

    if (item.textContent.includes("Pra você")) targetId = "pra-voce";
    else if (item.textContent.includes("O GoBank")) targetId = "o-gobank";
    else if (item.textContent.includes("Atendimento")) targetId = "atendimento";

    if (!targetId) return;

    const dropdown = document.getElementById(targetId);
    const isVisible = dropdown.classList.contains("show");

    dropdowns.forEach(d => d.classList.remove("show"));
    menuItems.forEach(i => {
      i.classList.remove("ativo");
      const seta = i.querySelector(".seta");
      if (seta) seta.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAC4ElEQVR4AeyYvWpVQRSFg4j4Bj6DIFjaiaWgaCGijVaKhU9g6ytoYWURSBMS8gtJk0C61Pl5h5TpEkL+1gdn4NzJ3NzMmZlzyZkte52Z2TNn1t5r9hyTPJip/J8JUHkBzFgFWAVUroBdgcoLwD6CdgXsClSugF2BygvA/heo7gr4FW8C+IrUNrYKqO3E/XytAnxFahunVsBPCXYk7Asvhb7sqYj+CbPCC6GzpQjwRax/hSfCM2FLeCeUNjj2RPJDIIZdtc+FTpYiwC+P8aHGK8J7oZSxNxxwtTl+twcx/RQBjscQLcvPKanJaiTP3qFND0LOu/hSBPgughMhZJxSThHYa1zyxPAnFMRdfCkCHIrgrXAqhGxRztdCqpE8e4X2gZsY+BCH5if6UgRg82093ggEombEuKdUQooIvEvy7DWyuQZwwk0MGnazVAFgJQACOWPg4ZHGXUUged4NJQ8XnHCLorvlEAB2AuEjRWCM2+gigkued9t70YcDLjgZJyGXAASxqQeBnav1jUQ4TRLz5/wxa1jLO/6cSx4ufy44nuTMKQBcBPZBna4i3JY8eyIwHKLIY7kFIKpVPbqIMCl59syavOIs9jdBJ8IFJB4obUqchN0UfXzMOZ9rOXmSZ0/ny9aWqAAXHAF/dgOvJdEN+UgcjEseAYslL/5iFcDeYEGPT8I4W9IEQiCIujcMARHyxkQuR8kKcDHOq/NRuBR8e+w7mjEnzzsI2LjKNH0IQOQk8lWdkAhyjxhrOHneGZkoMehLAGKf02OSCCTPml6SVzzFvwFwtOFEuGo7m75LnjWNq3zTZwW4bEjwmwZtEehz8sxpqj+bhgBk918PfqrbUQv4lbf35MXd+xWA02FNnVcN1tVOxaZVAVNJNkRqAoRUqck3uAqIPTwTIFaxoa23ChjaicbmYxUQq9jQ1lsFDO1EY/OxCohVbGjrrQKGdqKx+VgFxCo2tPVWAff9RFPjvwYAAP//VDfIYAAAAAZJREFUAwCJ0GeBG7npOQAAAABJRU5ErkJggg==";
    });

    if (!isVisible) {
      dropdown.classList.add("show");
      item.classList.add("ativo");
      const seta = item.querySelector(".seta");
      if (seta) seta.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADDUlEQVR4AexWvW4TQRD+9hyswBvAK6A4DSUFkAYaXARoUkGPFP+ICokXCPgFEEUKBEIgQCBBRygRQjiWeJhgezOz1sXa89rx3u2dk7uxdnM3u7Mz833zrZ0IFf8IARUXAEQBooCKMyBXoOICkC9BuQJyBSrOgFyBigtAfgUqdwWSihcCkoxUzRYFVK3jSbyigCQjhdmtwTV0Dl+Zye+FJbYTrUYB7cEjRPoXlfLQTH7vHO7Qe+GjeAIYqNIvCamiGQ9+3yc1FE5CsQQweGCfUDNgeliDaymcBE5qVZGbMQW/KCfvEQn9e7nVkQjMCRNLOZgdA4g7v0w+8lFvMDmTQzF2SEpmLwS3uoMHgHoHwCdXDXymABJ8ioL3hwFo/XbuubG+A57AkduHlNDu33XvhVnNjwBTOAFw13lkgPc2v4HnWDfJzUVCDUq9h4lFHjmMfAjggrlwoOaomcE3DfB4czEJa4aEVv927B7yGZ6ANkl2An7NUegs+NjpNBIi9QktfxLi8POeYQngAtOAj6tbTEIdOZAQjgAGzwUCfp2PwcfPZUjo9m/F7lmfUdYA5nyLpDkBXze2/We+7G2/qTUlYThdPHmrQ6uv6IYhITsBXEhI8DFOJkHrbTJdJKyHIiEbAQyeuwG4Oj+knzr7257QeI0Xm59xGgmdv9e9Yiac0xPw5M8V6sIXirdOc3Zw4dzF2R2/lSkJrnOkhOg7dv9ddm0us5aegNGFXUpwkWZyDKlrTXDhyZ20NsfS5p+l2eugcAnR/8dpQ6cnQOmrzqTceS7YuZlhcRLzvjOCUu5anM72YnoCRuqZHQrhO59IgOeNj0ZdwMjaGuOpZXsY6QnobfyGwg7NA8r3g+ZWUNlTQOdgJYyxZfIqUG61jV5j4PRdYjE9ARx8r/Eae40b1JmbNH/yUiGz1zgweU3ujQ9ZcmYjIEvmM3JWCDgjjVhZGaKAlVGfU2LfsKIAX8bK5i8KKFtHffGIAnwZK5u/KKBsHfXFIwrwZaxs/qKAsnXUF48owJexsvmLAs57R7PWfwwAAP//l21vvQAAAAZJREFUAwD3W+iBwSJOcwAAAABJRU5ErkJggg==";
    }
  });
});

document.addEventListener("click", (event) => {
  const isMenuItem = event.target.closest(".menu-li");
  if (!isMenuItem) {
    dropdowns.forEach(d => d.classList.remove("show"));
    menuItems.forEach(item => {
      item.classList.remove("ativo");
      const seta = item.querySelector(".seta");
      if (seta) seta.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAC4ElEQVR4AeyYvWpVQRSFg4j4Bj6DIFjaiaWgaCGijVaKhU9g6ytoYWURSBMS8gtJk0C61Pl5h5TpEkL+1gdn4NzJ3NzMmZlzyZkte52Z2TNn1t5r9hyTPJip/J8JUHkBzFgFWAVUroBdgcoLwD6CdgXsClSugF2BygvA/heo7gr4FW8C+IrUNrYKqO3E/XytAnxFahunVsBPCXYk7Asvhb7sqYj+CbPCC6GzpQjwRax/hSfCM2FLeCeUNjj2RPJDIIZdtc+FTpYiwC+P8aHGK8J7oZSxNxxwtTl+twcx/RQBjscQLcvPKanJaiTP3qFND0LOu/hSBPgughMhZJxSThHYa1zyxPAnFMRdfCkCHIrgrXAqhGxRztdCqpE8e4X2gZsY+BCH5if6UgRg82093ggEombEuKdUQooIvEvy7DWyuQZwwk0MGnazVAFgJQACOWPg4ZHGXUUged4NJQ8XnHCLorvlEAB2AuEjRWCM2+gigkued9t70YcDLjgZJyGXAASxqQeBnav1jUQ4TRLz5/wxa1jLO/6cSx4ufy44nuTMKQBcBPZBna4i3JY8eyIwHKLIY7kFIKpVPbqIMCl59syavOIs9jdBJ8IFJB4obUqchN0UfXzMOZ9rOXmSZ0/ny9aWqAAXHAF/dgOvJdEN+UgcjEseAYslL/5iFcDeYEGPT8I4W9IEQiCIujcMARHyxkQuR8kKcDHOq/NRuBR8e+w7mjEnzzsI2LjKNH0IQOQk8lWdkAhyjxhrOHneGZkoMehLAGKf02OSCCTPml6SVzzFvwFwtOFEuGo7m75LnjWNq3zTZwW4bEjwmwZtEehz8sxpqj+bhgBk918PfqrbUQv4lbf35MXd+xWA02FNnVcN1tVOxaZVAVNJNkRqAoRUqck3uAqIPTwTIFaxoa23ChjaicbmYxUQq9jQ1lsFDO1EY/OxCohVbGjrrQKGdqKx+VgFxCo2tPVWAff9RFPjvwYAAP//VDfIYAAAAAZJREFUAwCJ0GeBG7npOQAAAABJRU5ErkJggg==";
    });
  }
});
