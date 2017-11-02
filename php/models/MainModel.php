<?php

class MainModel {
	private $sql;
        private $error;

	function __construct() {
		$this->sql = new sql();
	}
        
        function getBodyParts($position, $gender, $skin=-1) {
            $db = $this->sql;
            
            $query = "select * from t_body_parts b where b.position = :position and b.gender = :gender and id != ".$skin;
            $params = array(0 => array('name' => ':position', 'value' => $position, 'type' => PDO::PARAM_INT|PDO::PARAM_INPUT_OUTPUT, 'size' => -1),
                1 => array('name' => ':gender', 'value' => $gender, 'type' => PDO::PARAM_INT|PDO::PARAM_INPUT_OUTPUT, 'size' => -1));
            
            return $db->execStatement($query, $params); 
        }
        
        function getAgeList() {
            $db = $this->sql;
            
            $query = "select id, display_name from t_age g";
            
            return $db->execStatement($query);      
        }
        
        function getSubBodyParts($id, $position, $gender) { 
            $db = $this->sql;
            
            $query = "SELECT s.id, s.name FROM t_body_map m, t_sub_body_parts s
                        where m.sub_body_parts_id = s.id
                          and m.body_parts_id = :id
                          and s.position = :position
                          and s.gender = :gender";
            $params = array(0 => array('name' => ':id', 'value' => $id, 'type' => PDO::PARAM_INT|PDO::PARAM_INPUT_OUTPUT, 'size' => -1),
                    1 => array('name' => ':position', 'value' => $position, 'type' => PDO::PARAM_INT|PDO::PARAM_INPUT_OUTPUT, 'size' => -1),
                    2 => array('name' => ':gender', 'value' => $gender, 'type' => PDO::PARAM_INT|PDO::PARAM_INPUT_OUTPUT, 'size' => -1));
            
            return $db->execStatement($query, $params);      
        }        
        
        function getStructure($gender) {
            $body_parts = array('front' => array(),
                        'back' => array(),
                        'skin' => array('ID' => 11, 'name' => 'კანი', 'position' => 0, 'sub_parts' => array())
                );   
            $body_parts['front'] = $this->getBodyParts(1, $gender, 11);
            $body_parts['back'] = $this->getBodyParts(2, $gender, 11);
            
            for($i=0; $i<sizeof($body_parts['front']); $i++)
                $body_parts['front'][$i]['sub_parts'] = $this->getSubBodyParts ($body_parts['front'][$i]['ID'], 1, $gender);
            for($i=0; $i<sizeof($body_parts['back']); $i++)
                $body_parts['back'][$i]['sub_parts'] = $this->getSubBodyParts ($body_parts['back'][$i]['ID'], 2, $gender);
            
            return $body_parts;
        }
        
        function getSymptoms($id) {
            $position = isset($_REQUEST['position']) ? $_REQUEST['position'] : 1;
 
            $db = $this->sql;
            
            $query = "select s.id, s.name  from t_symptoms s, t_symptoms_map m
                       where s.id = m.symptom_id
                         and m.sub_body_part_id = :id";
            $params = array(0 => array('name' => ':id', 'value' => $id, 'type' => PDO::PARAM_INT|PDO::PARAM_INPUT_OUTPUT, 'size' => -1));
            
            return $db->execStatement($query, $params);      
        }
        
}


?>