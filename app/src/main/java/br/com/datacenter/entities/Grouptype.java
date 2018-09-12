/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.datacenter.entities;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author dev
 */
@Entity
@Table(name = "grouptype")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Grouptype.findAll", query = "SELECT g FROM Grouptype g")
    , @NamedQuery(name = "Grouptype.findById", query = "SELECT g FROM Grouptype g WHERE g.id = :id")
    , @NamedQuery(name = "Grouptype.findByName", query = "SELECT g FROM Grouptype g WHERE g.name = :name")
    , @NamedQuery(name = "Grouptype.findByStatus", query = "SELECT g FROM Grouptype g WHERE g.status = :status")})
public class Grouptype implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Basic(optional = false)
    @Column(name = "name")
    private String name;
    @Basic(optional = false)
    @Column(name = "status")
    private short status;

    public Grouptype() {
    }

    public Grouptype(Integer id) {
        this.id = id;
    }

    public Grouptype(Integer id, String name, short status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public short getStatus() {
        return status;
    }

    public void setStatus(short status) {
        this.status = status;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Grouptype)) {
            return false;
        }
        Grouptype other = (Grouptype) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "br.com.datacenter.entities.Grouptype[ id=" + id + " ]";
    }
    
}
