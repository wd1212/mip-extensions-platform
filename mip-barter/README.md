# mip-barter

mip-barter 组件说明

标题|内容
----|----
类型|通用
支持布局|responsive,fixed-height,fill,container,fixed
所需脚本|https://c.mipcdn.com/static/v1/mip-barter/mip-barter.js

## 示例

### 基本用法
```html
<mip-barter>
    <ul class="bar1 barchange1">
		<li>A</li>
		<li>A</li>
		<li>A</li>
		<li>A</li>
		<li>A</li>
		<li>A</li>
		<li>A</li>
		<li>A</li>
	</ul>
	<ul class="bar1 barchange2">
		<li>B</li>
		<li>B</li>
		<li>B</li>
		<li>B</li>
		<li>B</li>
		<li>B</li>
		<li>B</li>
		<li>B</li>
	</ul>
	<ul class="bar1 barchange3">
		<li>a</li>
		<li>a</li>
		<li>a</li>
		<li>a</li>
		<li>a</li>
		<li>a</li>
		<li>a</li>
		<li>a</li>
	</ul>
	<div style="text-align: center;"><span class="bexClick">换一批</span></div>
</mip-barter>
```

## 属性

### {firstChange:代表第一次换的是第二组}
### {changeNum:这是要换的批数}
### {changeObj:选择要点击进行执行此组件的对象}
oextend(firstChange,changeNum,changeObj)

说明：{说明}
必选项：{是|否}
类型：{类型}
取值范围：{取值范围}
单位：{单位}
默认值：{默认值}

## 注意事项

