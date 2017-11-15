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
        
        function getSubBodyPartsById($id, $position, $gender) { 
            $db = $this->sql;
            
            $query = "SELECT s.id, s.name, s.image, s.html_id FROM t_body_map m, t_sub_body_parts s
                        where m.sub_body_parts_id = s.id
                          and m.body_parts_id = :id
                          and s.position = :position
                          and s.gender = :gender
                          and s.image is not null";
            $params = array(0 => array('name' => ':id', 'value' => $id, 'type' => PDO::PARAM_INT|PDO::PARAM_INPUT_OUTPUT, 'size' => -1),
                    1 => array('name' => ':position', 'value' => $position, 'type' => PDO::PARAM_INT|PDO::PARAM_INPUT_OUTPUT, 'size' => -1),
                    2 => array('name' => ':gender', 'value' => $gender, 'type' => PDO::PARAM_INT|PDO::PARAM_INPUT_OUTPUT, 'size' => -1));
            
            return $db->execStatement($query, $params);      
        }   
        
        function getSubBodyParts($position, $gender) {
            $db = $this->sql;
            
            $query = "select * from t_sub_body_parts s where s.position = :position and s.gender = :gender and s.image is not null";
            $params = array(0 => array('name' => ':position', 'value' => $position, 'type' => PDO::PARAM_INT|PDO::PARAM_INPUT_OUTPUT, 'size' => -1),
                1 => array('name' => ':gender', 'value' => $gender, 'type' => PDO::PARAM_INT|PDO::PARAM_INPUT_OUTPUT, 'size' => -1));
            
            return $db->execStatement($query, $params); 
        }
        
        function getStructure() {
            $body_parts = array(
                'male' => array('front' => array(),
                    'back' => array(),
                    'skin' => array('ID' => 11, 'name' => 'კანი', 'position' => 0, 'sub_parts' => array())
                ),
                'female' => array('front' => array(),
                    'back' => array(),
                    'skin' => array('ID' => 27, 'name' => 'კანი', 'position' => 0, 'sub_parts' => array())
                )
            );   
            $body_parts['male']['front'] = $this->getBodyParts(1, 1, 11);
            $body_parts['male']['back'] = $this->getBodyParts(2, 1, 11);
            $body_parts['female']['front'] = $this->getBodyParts(1, 2, 27);
            $body_parts['female']['back'] = $this->getBodyParts(2, 2, 27);
            
            for($i=0; $i<sizeof($body_parts['male']['front']); $i++) {
                $body_parts['male']['front'][$i]['sub_parts'] = $this->getSubBodyPartsById($body_parts['male']['front'][$i]['ID'], 1, 1);
                $body_parts['female']['front'][$i]['sub_parts'] = $this->getSubBodyPartsById($body_parts['female']['front'][$i]['ID'], 1, 2);
            }
            for($i=0; $i<sizeof($body_parts['male']['back']); $i++) {
                $body_parts['male']['back'][$i]['sub_parts'] = $this->getSubBodyPartsById($body_parts['male']['back'][$i]['ID'], 2, 1);
                $body_parts['female']['back'][$i]['sub_parts'] = $this->getSubBodyPartsById($body_parts['female']['back'][$i]['ID'], 2, 2);
            }
            
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