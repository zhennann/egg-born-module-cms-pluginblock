module.exports = ctx => {
  class CMSBlock {
    render({ md, options, /* block, token, index,*/ content }) {
      const url = md.utils.escapeHtml(content.url);
      const width = md.utils.escapeHtml(content.width || '100%');
      const height = md.utils.escapeHtml(content.height || '300px');
      return `<div class="block block-iframe" style="width:${width};height:${height};"><iframe width="100%" height="100%" scrolling="auto" frameborder="0" src="${url}"></iframe></div>\n`;
    }
    // render({ md, options, block, token, index, content }) {
    //   return options.utils.async({ block, content });
    // }
    // async renderAsync({ md, options, block, content }) {
    //   const url = md.utils.escapeHtml(content.url);
    //   const width = md.utils.escapeHtml(content.width || '100%');
    //   const height = md.utils.escapeHtml(content.height || '300px');
    //   return `<div class="block block-iframe" style="width:${width};height:${height};"><iframe width="100%" height="100%" scrolling="auto" frameborder="0" src="${url}"></iframe></div>\n`;
    // }
  }

  return CMSBlock;
};
