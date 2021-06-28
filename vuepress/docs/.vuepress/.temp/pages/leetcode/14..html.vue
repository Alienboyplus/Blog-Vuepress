<template><h1 id="_14-最长公共前缀" tabindex="-1"><a class="header-anchor" href="#_14-最长公共前缀" aria-hidden="true">#</a> <a href="https://leetcode-cn.com/problems/longest-common-prefix/" target="_blank" rel="noopener noreferrer">14. 最长公共前缀<OutboundLink/></a></h1>
<p>编写一个函数来查找字符串数组中的最长公共前缀。</p>
<p>如果不存在公共前缀，返回空字符串 <code>&quot;&quot;</code>。</p>
<p>示例 1：</p>
<p>输入：strs = [&quot;flower&quot;,&quot;flow&quot;,&quot;flight&quot;] 输出：&quot;fl&quot; 示例 2：</p>
<p>输入：strs = [&quot;dog&quot;,&quot;racecar&quot;,&quot;car&quot;] 输出：&quot;&quot; 解释：输入不存在公共前缀。</p>
<p>提示：</p>
<p>0 &lt;= strs.length &lt;= 200 0 &lt;= strs[i].length &lt;= 200 strs[i] 仅由小写英文字母组成</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>//超时
var longestCommonPrefix = function(strs) {
    var num = 0;
    var flag = 1;

    while(flag)
    {
        let prefix = strs[0].substr(0, num+1);
        for(let i=1;i&lt;strs.length;i++)
        {
            if(prefix != strs[i].substr(0, num+1))
            {
                flag = 0;
                break;
            }
        }
        if(flag==1) num++;
    }

    return strs[0].substr(0,num)

}; 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">longestCommonPrefix</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">strs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>strs<span class="token punctuation">.</span>length<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">""</span>
    <span class="token keyword">let</span> ans <span class="token operator">=</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>strs<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>ans<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> j<span class="token operator">&lt;</span>strs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token comment">//不大于前缀长度且不大于第i个字符串长度</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>ans<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">!=</span>strs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        ans <span class="token operator">=</span> ans<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>j<span class="token punctuation">)</span><span class="token comment">//这一步到下一步可以减少计算量</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>ans <span class="token operator">===</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ans
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></template>
