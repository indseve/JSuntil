JSON_UNQUOTE(JSON_EXTRACT(p_log, '$.beginDate'))
-- JSON_UNQUOTE去除json的引号
-- JSON_EXTRACT提取json的值
-- 传递json值需要用''包括
