jQuery.microdata.json=function(e,t){function r(e,t){var i=n(e),s={},o=i.itemType();return o.length&&(s.type=n(o).toArray()),i.itemId()&&(s.id=i.itemId()),s.properties={},i.properties().each(function(i,o){var u=n(o),a;u.itemScope()?n.inArray(o,t)!=-1?a="ERROR":(t.push(e),a=r(o,t),t.pop()):a=u.itemValue(),n.each(u.itemProp(),function(e,t){s.properties[t]||(s.properties[t]=[]),s.properties[t].push(a)})}),s}var n=jQuery,i={};i.items=[];var s=(e?n(e):n(document)).items();return s.each(function(e,t){var s=n(t);s.itemScope()&&i.items.push(r(t,[]))}),t?t(i):JSON.stringify(i)};